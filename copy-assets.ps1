$src = 'C:\Users\DELL\Pictures\Bolacious'
$dst = 'c:\Users\DELL\antigravity\Bolacious-Events\public\gallery'

# Based on actual file listing with correct 2026-07-09 dates
# Curating 12 best photos across categories
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.49.09.jpeg') (Join-Path $dst 'ushers-1.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.48.53 (2).jpeg') (Join-Path $dst 'ushers-team.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.48.54.jpeg') (Join-Path $dst 'catering-1.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.49.14 (1).jpeg') (Join-Path $dst 'catering-2.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.49.14.jpeg') (Join-Path $dst 'small-chops.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.48.51.jpeg') (Join-Path $dst 'cake-1.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.48.52.jpeg') (Join-Path $dst 'cake-2.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.49.08.jpeg') (Join-Path $dst 'wedding-setup.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.49.09 (1).jpeg') (Join-Path $dst 'event-stage.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.48.54 (1).jpeg') (Join-Path $dst 'ushers-posing.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.48.40.jpeg') (Join-Path $dst 'event-table.jpeg')
Copy-Item (Join-Path $src 'WhatsApp Image 2026-07-09 at 13.48.42 (1).jpeg') (Join-Path $dst 'event-decor.jpeg')

Write-Host "All gallery photos copied successfully!"
