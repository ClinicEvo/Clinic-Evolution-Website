#!/usr/bin/env python3
"""
Redact the Patient Pulse product screenshots for publication.

Real patient names are replaced with fictional ones drawn back into the image in
a matching face, colour and position, rather than covered with blur or blocks.
The result still reads as a genuine screenshot of the real product — which is the
whole point of using it as proof — while containing no real patient data.

For each region the script measures the original text's ink box, samples the
local background and text colours, paints the region out, and redraws the
replacement aligned to the same top-left. Everything that constitutes product
proof is left untouched: the Patient Pulse chrome, the Cliniko domain, message
bodies, pipeline stages, sources and aggregate figures.

Requires Pillow. Run from the repo root:
    /usr/bin/python3 scripts/redact-pulse-screenshots.py
"""
from collections import Counter

from PIL import Image, ImageDraw, ImageFont

SRC = "private-assets/patient-pulse-unredacted"
OUT = "public/images/patient-pulse"

REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

# Sampled off crisp text in these same screenshots ("Team Inbox", "Danny Morgan",
# the preview lines). The regions we overwrite were already blurred in the source,
# so their own pixels would hand us a washed-out grey instead of the real colour.
INK_STRONG = (23, 27, 53)   # bold names and card titles
INK_MUTED = (119, 114, 147)  # preview lines and inline body text


def luminance(px):
    return 0.299 * px[0] + 0.587 * px[1] + 0.114 * px[2]


def analyse(im, box):
    """Background colour, text colour and ink bounding box for a text region."""
    region = im.crop(box).convert("RGB")
    pixels = list(region.getdata())
    w, h = region.size

    bg = Counter(pixels).most_common(1)[0][0]
    bg_lum = luminance(bg)

    # "Ink" is anything meaningfully different in luminance from the background.
    ink = [
        (i % w, i // w, p)
        for i, p in enumerate(pixels)
        if abs(luminance(p) - bg_lum) > 28
    ]
    if not ink:
        return bg, (0, 0, 0), None

    xs = [p[0] for p in ink]
    ys = [p[1] for p in ink]
    ink_box = (min(xs), min(ys), max(xs) + 1, max(ys) + 1)

    # Text colour: mean of the third furthest from the background, which skips
    # antialiased edge pixels and lands on the glyph core.
    ink.sort(key=lambda p: abs(luminance(p[2]) - bg_lum), reverse=True)
    core = ink[: max(1, len(ink) // 3)]
    fg = tuple(round(sum(p[2][c] for p in core) / len(core)) for c in range(3))

    return bg, fg, ink_box


def replace_text(
    im, box, text, size, bold=False, colour=INK_STRONG, max_width=None, at=None
):
    """Paint out `box` and draw `text` where the original text sat.

    `at` is an explicit (x, baseline) in image coordinates. Use it where the
    source text was already blurred: the blur inflates the measured ink box, so
    aligning to it lands the replacement a few pixels high.
    """
    bg, _, ink = analyse(im, box)
    draw = ImageDraw.Draw(im)
    draw.rectangle(box, fill=bg)

    if ink is None:  # nothing was there to replace
        return

    font = ImageFont.truetype(BOLD if bold else REGULAR, size)

    limit = max_width if max_width is not None else box[2] - box[0] - (ink[0])
    label = text
    if draw.textlength(label, font=font) > limit:
        # Mimic the product's own truncation rather than overflowing the card.
        while label and draw.textlength(label + "…", font=font) > limit:
            label = label[:-1]
        label = label.rstrip() + "…"

    if at is not None:
        draw.text(at, label, font=font, fill=colour, anchor="ls")
        return

    # Align the drawn glyphs' top-left to where the original ink started.
    off = font.getbbox(label)
    draw.text(
        (box[0] + ink[0] - off[0], box[1] + ink[1] - off[1]),
        label,
        font=font,
        fill=colour,
    )


# ── pp-conversations.png ────────────────────────────────────────────────────
im = Image.open(f"{SRC}/pp-conversations.png").convert("RGB")

# Contact avatars — one is an identifiable face photo. Flatten the column to the
# same neutral tint the others already use. Done before the names are drawn, and
# stopping short of x=369, because the name glyphs begin at about x=370.
for cy in (292, 382, 472, 562, 652, 742, 832):
    row_bg, _, _ = analyse(im, (296, cy - 16, 328, cy + 16))
    d = ImageDraw.Draw(im)
    d.rectangle((329, cy - 21, 368, cy + 21), fill=row_bg)
    d.ellipse((336, cy - 14, 364, cy + 14), fill=(226, 232, 240))

# Team inbox contact names. The second row is the open conversation, so its name
# has to match the header, the message body and the opportunity bar below.
INBOX = [
    ((366, 278, 534, 302), "Marcus Whitfield"),
    ((366, 368, 534, 393), "Caroline Foster"),
    ((366, 458, 534, 483), "Callum Prentice"),
    ((366, 545, 534, 570), "Priya Raghunathan"),
    ((366, 638, 534, 663), "Elena Kovacs"),
    ((366, 728, 534, 753), "Adam Hanley"),
    ((366, 818, 534, 843), "Rosamund Sadler"),
]
for box, name in INBOX:
    replace_text(im, box, name, 13, bold=True, colour=INK_STRONG)

# Open-conversation header.
replace_text(im, (712, 120, 860, 146), "Caroline Foster", 15, colour=INK_STRONG)

# "Hi <name>," inside the message body. Top edge sits below the "Danny Morgan"
# descenders at y=450 so the sender name stays crisp.
# Isolating crisp glyph runs from the blurred ones by contrast puts "Hi" at
# x732-743, the blurred name at x749-799 and "Thank" at x804-850, sharing a
# baseline at y=468, with the original comma at x804-807 and "Thank" from x810.
# "Caroline" measures 47px at Arial 13 against the original name's 48px, so the
# comma and the following "Thank" keep their original spacing.
replace_text(
    im, (746, 452, 808, 473), "Caroline,", 13, colour=INK_MUTED, at=(749, 468)
)

# Preview line leaking a first name: "Hey Rosemary, Did you know..."
# Crisp-run analysis puts "Hey" at x335-358, the name and its comma at x365-431
# and "Did" from x439. The comma goes with the name, so the replacement supplies
# its own.
replace_text(im, (360, 849, 434, 869), "Rosamund,", 13, colour=INK_MUTED)

# Opportunity activity bar.
replace_text(
    im, (836, 824, 937, 847), "Caroline Foster", 13, bold=True, at=(839, 840)
)

# Cliniko deep link: keep "https://bodyfunction.uk2.cliniko.com/bookings" as
# integration proof, drop the query string carrying the internal
# appointment_type_id.
bg, _, _ = analyse(im, (1700, 712, 1780, 741))
ImageDraw.Draw(im).rectangle((1346, 712, 1700, 741), fill=bg)

im.save(f"{OUT}/pp-conversations.png", optimize=True)
print("wrote", f"{OUT}/pp-conversations.png", im.size)

# ── pp-opportunities.png ────────────────────────────────────────────────────
# Card titles read "<name> | £<value> <pipeline>". Pipeline stages, counts,
# values, sources, WON/ABANDONED pills and the Facebook attribution all stay:
# that is the proof. Only the names change.
im2 = Image.open(f"{SRC}/pp-opportunities.png").convert("RGB")

# x ranges are set to clear the whole original title while stopping short of the
# avatar buttons (from x1474 in column 4) and the WON / ABANDONED status pills
# (from x1727 in column 5), which are product proof and stay visible.
CARDS = [
    # (x0, x1), [(y_centre, replacement title), ...]
    ((262, 512), [
        (356, "Harriet Vance | £64 New Patient"),
        (510, "Rebecca Nwosu | £64 New Patient"),
        (690, "Margaret Doyle | £64 New Patient"),
        (843, "Claudia Reeve | £64 New Patient"),
    ]),
    ((578, 834), [
        (356, "Olumide Adeyemi-Clarke | £64 New Patient"),
        (510, "Claudia Bettencourt | £64 New Patient"),
    ]),
    ((898, 1065), [
        (356, "Sunil D | £64 New Patient"),
    ]),
    ((1214, 1462), [
        (356, "Patricia Alvarenga Da Costa | £64 New Patient"),
        (510, "Ephrem Tesfaye | £49 intro"),
        (663, "Marlene Nguyen | £49 intro"),
        (817, "Angela Shepherd | £49 intro"),
    ]),
    ((1528, 1722), [
        (356, "Andreas Nicolaou | £64 New Patient"),
        (510, "Ionel Anghelescu | £64 New Patient"),
        (690, "Stanley Sabino | £49 intro"),
        (843, "Mandy Ellison | £49 intro"),
    ]),
]
for (x0, x1), cards in CARDS:
    for y, title in cards:
        replace_text(im2, (x0, y - 12, x1, min(y + 12, im2.size[1])), title, 13, bold=True)

im2.save(f"{OUT}/pp-opportunities.png", optimize=True)
print("wrote", f"{OUT}/pp-opportunities.png", im2.size)
