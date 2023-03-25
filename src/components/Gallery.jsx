import React from 'react'
import "./styles/Gallery.css";
function Gallery() {
  return (
    <div>
        <section className="gallery">
            <h2>Gallery</h2>
            <ul>
                <li><img width={200} src="assets\pic1.png"></img></li>
                <li><img width={200} src="assets\pic1.png"></img></li>
                <li><img width={200} src="assets\pic1.png"></img></li>
            </ul>
        </section>
    </div>
  )
}

export default Gallery