# Media Manager API

## list
- Method : GET
- Params :
  - `path`

This API call should return an array of files (object) with the following properties :
- `type` : *dir* or *file*
- `path` : e.g. `folder/image.jpg` (no leading slash)
- `timestamp` : e.g. `1493908313`
- `size` : e.g. `6550`
- `thumb` : e.g. `https://www.iutbayonne.univ-pau.fr/~klevron/mm/thumbs/images/Chrysanthemum_150x150.jpg`

## download
- Method : GET
- Params :
  - `path`

## delete
- Method : POST
- Params :
  - `path`

## upload
- Method : POST
- Params :
  - `path`
  - `file`
