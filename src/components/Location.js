import React from 'react'

export default function Location() {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.897049142618!2d15.975142815924091!3d45.81332017910668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6fdc3ad82b1%3A0xeb4b22854194dc34!2sTrg+bana+Josipa+Jela%C4%8Di%C4%87a%2C+10000%2C+Zagreb!5e0!3m2!1shr!2shr!4v1539799719376" width="100%" height="500" frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>

      <div className="location_tag">
      <div>Location</div>
      </div>
    </div>
  )
}
