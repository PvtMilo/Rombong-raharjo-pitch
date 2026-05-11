import { copyFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const src = 'C:/Users/flip3/.gemini/antigravity/brain/9a4c7fc2-5c4c-4456-8039-727c8397de81'
const dst = 'C:/Users/flip3/Documents/Repository/rombong-pitch/public/images'

mkdirSync(dst, { recursive: true })

const files = [
  ['service_design_1778431673307.png', 'service-design.jpg'],
  ['service_construction_1778431688316.png', 'service-construction.jpg'],
  ['service_interior_1778431703091.png', 'service-interior.jpg'],
  ['blog_1_1778431732663.png', 'blog-1.jpg'],
  ['blog_2_1778431748080.png', 'blog-2.jpg'],
  ['blog_3_1778431763370.png', 'blog-3.jpg'],
  ['blog_4_1778431780657.png', 'blog-4.jpg'],
]

for (const [from, to] of files) {
  copyFileSync(join(src, from), join(dst, to))
  console.log('Copied', to)
}
console.log('All done!')
