# Font Standardization - Replacement Summary

## Completed Replacements

### ✅ Global Files

- `src/styles/global.css` - Updated to Poppins
- `tailwind.config.js` - Configured with Poppins
- `src/pages/Announcement.tsx` - Updated to Poppins

### ✅ Activity Pages (Completed)

- `src/pages/Activities/Skilldevelopment.tsx` - Updated to Poppins
- `src/pages/Activities/Promotingteaching.tsx` - Updated to Poppins
- `src/pages/Activities/Healthawareness.tsx` - Updated to Poppins
- `src/pages/Activities/Twentyseven.tsx` - Updated to Poppins
- `src/pages/Activities/anandam/Nov2020Gallery.tsx` - Updated to Poppins

## Remaining Files to Update

### Files with Cormorant Garamond (Serif Font)

1. `src/pages/Activities/Twentysix.tsx`
2. `src/pages/Activities/DisasterReliefGallery.tsx`
3. `src/pages/Activities/OrphanageGallery.tsx`
4. `src/pages/Activities/ScholarshipGallery.tsx`
5. All files in `src/pages/Activities/anandam/` folder

## Simple Find & Replace Instructions

Use your code editor's "Find and Replace in Files" feature:

### Replace 1: Cormorant Garamond with serif

**Find:** `'Cormorant Garamond', serif`
**Replace with:** `'Poppins', sans-serif`
**In folder:** `src/pages/Activities`

### Replace 2: Cormorant Garamond without serif

**Find:** `'Cormorant Garamond'`
**Replace with:** `'Poppins', sans-serif'`
**In folder:** `src/pages/Activities`

### Replace 3: Jost font

**Find:** `'Jost', sans-serif`
**Replace with:** `'Poppins', sans-serif`
**In folder:** `src/pages/Activities`

### Replace 4: Playfair Display

**Find:** `'Playfair Display', serif`
**Replace with:** `'Poppins', sans-serif`
**In folder:** `src/pages`

### Replace 5: Tiro Telugu

**Find:** `'Tiro Telugu', serif`
**Replace with:** `'Poppins', sans-serif`
**In folder:** `src/pages`

### Replace 6: DM Sans

**Find:** `'DM Sans', sans-serif`
**Replace with:** `'Poppins', sans-serif`
**In folder:** `src/pages`

## VS Code Instructions

1. Press `Ctrl+Shift+H` (Windows) or `Cmd+Shift+H` (Mac)
2. Enter the "Find" text
3. Enter the "Replace with" text
4. Click the folder icon and select the folder
5. Click "Replace All"
6. Repeat for each replacement above

## Verification

After replacements, search for these patterns to ensure nothing was missed:

- `serif` (should only appear in comments or imports)
- `Cormorant`
- `Jost`
- `Playfair`
- `Tiro`

## Result

All text across the entire project will use:

- **Font Family:** Poppins
- **Font Style:** Sans-serif (no serif fonts)
- **Consistent sizing:** As defined in tailwind.config.js and global.css
