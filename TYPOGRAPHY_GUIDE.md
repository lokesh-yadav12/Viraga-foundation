# Typography Standardization Guide

## Font Family

- **Primary Font**: Poppins (for all text)
- **Heading Font**: Poppins (bold/semibold)
- **Body Font**: Poppins (regular/medium)

## Standardized Classes

### Headings

#### Hero Heading (Main page hero sections)

```jsx
<h1 className="heading-hero">Your Hero Title</h1>
// Output: text-4xl sm:text-5xl font-bold
```

#### Page Title (Top of each page)

```jsx
<h1 className="heading-page">Page Title</h1>
// Output: text-3xl sm:text-4xl font-bold
```

#### Section Heading (Major sections)

```jsx
<h2 className="heading-section">Section Title</h2>
// Output: text-2xl sm:text-3xl font-bold
```

#### Card Heading (Cards, boxes)

```jsx
<h3 className="heading-card">Card Title</h3>
// Output: text-xl sm:text-2xl font-semibold
```

#### Small Heading (Sub-sections)

```jsx
<h4 className="heading-small">Small Title</h4>
// Output: text-lg sm:text-xl font-semibold
```

### Body Text

#### Regular Paragraph (Default for all paragraphs)

```jsx
<p className="text-body">Your paragraph text here...</p>
// Output: text-base (16px) leading-relaxed text-slate-700
```

#### Large Paragraph (Introductions, important text)

```jsx
<p className="text-body-lg">Important paragraph text...</p>
// Output: text-lg (18px) leading-relaxed text-slate-700
```

#### Small Paragraph (Secondary info, captions)

```jsx
<p className="text-body-sm">Secondary information...</p>
// Output: text-sm (14px) leading-relaxed text-slate-600
```

### Labels & Captions

#### Label (Form labels, tags)

```jsx
<label className="text-label">Label Text</label>
// Output: text-sm font-medium text-slate-700
```

#### Caption (Image captions, footnotes)

```jsx
<span className="text-caption">Caption text</span>
// Output: text-xs text-slate-500
```

## Direct Tailwind Classes (Alternative)

If you prefer using Tailwind classes directly:

### Headings

- **Hero**: `text-4xl sm:text-5xl font-bold text-slate-900`
- **Page**: `text-3xl sm:text-4xl font-bold text-slate-900`
- **Section**: `text-2xl sm:text-3xl font-bold text-slate-900`
- **Card**: `text-xl sm:text-2xl font-semibold text-slate-900`
- **Small**: `text-lg sm:text-xl font-semibold text-slate-900`

### Body Text

- **Regular**: `text-base leading-relaxed text-slate-700`
- **Large**: `text-lg leading-relaxed text-slate-700`
- **Small**: `text-sm leading-relaxed text-slate-600`

### Labels

- **Label**: `text-sm font-medium text-slate-700`
- **Caption**: `text-xs text-slate-500`

## Font Sizes Reference

| Class     | Size | Line Height | Usage               |
| --------- | ---- | ----------- | ------------------- |
| text-xs   | 12px | 1.5         | Captions, footnotes |
| text-sm   | 14px | 1.5         | Small text, labels  |
| text-base | 16px | 1.6         | Default paragraphs  |
| text-lg   | 18px | 1.6         | Large paragraphs    |
| text-xl   | 20px | 1.5         | Small headings      |
| text-2xl  | 24px | 1.4         | Card headings       |
| text-3xl  | 30px | 1.3         | Section headings    |
| text-4xl  | 36px | 1.2         | Page titles         |
| text-5xl  | 48px | 1.1         | Hero titles         |

## Font Weights

- **font-normal** (400): Regular body text
- **font-medium** (500): Labels, emphasized text
- **font-semibold** (600): Sub-headings, card titles
- **font-bold** (700): Main headings

## Colors

- **Headings**: `text-slate-900` (dark)
- **Body Text**: `text-slate-700` (medium)
- **Secondary Text**: `text-slate-600` (lighter)
- **Captions**: `text-slate-500` (light)

## Examples

### Hero Section

```jsx
<div>
	<h1 className="heading-hero mb-4">Welcome to Viraga Foundation</h1>
	<p className="text-body-lg">Making a difference in communities...</p>
</div>
```

### Section

```jsx
<section>
	<h2 className="heading-section mb-6">Our Mission</h2>
	<p className="text-body mb-4">We are dedicated to...</p>
	<p className="text-body">Our vision is to create...</p>
</section>
```

### Card

```jsx
<div className="card">
	<h3 className="heading-card mb-3">Education Program</h3>
	<p className="text-body">Providing quality education...</p>
	<span className="text-caption mt-2">Since 2020</span>
</div>
```

## Migration Guide

To standardize existing components:

1. **Find all headings** and replace with standard classes:
    - `text-5xl` → `heading-hero`
    - `text-4xl` → `heading-page`
    - `text-3xl` → `heading-section`
    - `text-2xl` → `heading-card`

2. **Find all paragraphs** and add:
    - Default: `text-body`
    - Important: `text-body-lg`
    - Secondary: `text-body-sm`

3. **Ensure consistent colors**:
    - Headings: `text-slate-900`
    - Body: `text-slate-700`
    - Secondary: `text-slate-600`

## Notes

- Always use responsive classes (sm:, md:, lg:) for headings
- Maintain consistent spacing with mb-4, mb-6, etc.
- Use `leading-relaxed` for better readability
- Keep font-family consistent (Poppins throughout)
