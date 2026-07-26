#!/bin/bash
# Flyer-PDF rendern — aus dem flyer/-Verzeichnis aufrufen oder vom Repo-Root mit: bash flyer/build.sh
set -e
cd "$(dirname "$0")/.."

# QR neu generieren (falls gewünscht)
# /opt/homebrew/bin/python3 -c "
# import qrcode
# qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=2, box_size=10)
# qr.add_data('https://holytouch.com')
# qr.make(fit=True)
# qr.make_image(fill_color='#0a1500', back_color='white').save('flyer/qr.png')
# "

/opt/homebrew/bin/python3 -c "
from weasyprint import HTML
HTML(filename='flyer/flyer.html').write_pdf('flyer/holytouch-flyer-draft.pdf')
print('→ flyer/holytouch-flyer-draft.pdf')
"
