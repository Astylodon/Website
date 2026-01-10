import DeerListerPreview from './assets/preview.png';
import DeerListerDisplay from './assets/display.png';

---
sidebar_position: 2
---

# Configuration

Deer Lister can be configured by changing the `config.toml` file.

## Protecting folders

To protect a folder from being indexed and prevent a user from accessing it, add it to the `forbidden` option.

```toml
forbidden = [ "vendor", "mysecretfolder" ]
```

## Hiding folders

To hide a folder but still allow it to be indexed, add it to the `hidden` option.

```toml
hidden = [ "myhiddenfolder" ]
```

## Preview fallback

Whether clicking a file that can't be previewed will display a message instead of downloading it.

```toml
preview_fallback = true
```

## Enabled README

Whether to preview the README if one is present.

```toml
enabled_readme = true
```

## Previews

File previews show a preview of the file in a modal when the user click on it, enabled previews are under the `enabled_previews` option.

<div style={{textAlign: 'center'}}>
    <img src={DeerListerPreview} width="500" alt="Preview feature example"/>
</div>

```toml
[previews]
enabled = [ "image", "video" ]
```

The full list of possible previews are the following: image, video, code, audio, markdown, pdf

Some previews have additional configuration, you will find these under the `previews` option.

```toml
[previews.code]
unsafe = false
```

## Displays

Displays allow the content of a folder to be displayed differently, for example an image gallery. Displays need to be configured under the `displays` option.

<div style={{textAlign: 'center'}}>
    <img src={DeerListerDisplay} width="500" alt="Display feature example"/>
</div>

```toml
[[displays]]
path = "path/to/gallery"
format = "image"
displayOthers = false
displayBack = false
```

Possible formats values are the following: file (default), image, audio

For example the following config

```toml
[[displays]]
path = "media/myMusic"
format = "audio"


[[displays]]
path = "media/myPhotos"
format = "image"
displayOthers = true
```

Will display as the following:

```
Root
├─── media
│   ├─── myMusic  <── These files will be displayed in "audio" format
│   ├─── myPhotos <── These files will be displayed in "image" format, but still showing other files
│   ├─── myDocs   <── These files will be displayed in "file" format
```