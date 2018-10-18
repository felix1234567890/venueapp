import React from 'react'
import icon_calendar from '../resources/icons/calendar.png'
import icon_location from '../resources/icons/location.png'
import Zoom from 'react-reveal/Zoom'

export default function VenueInfo() {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
        <Zoom duration={500} delay={500}>
        <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red"></div>
                <div className="vn_icon" style={{background: `url(${icon_calendar}`}}> 
                
                </div>
                <div className="vn_title">
                  Event Date and time
                </div>
                <div className="vn_desc">
                15 September 2019, 15:00
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="vn_item">
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_yellow"></div>
                <div className="vn_icon" style={{background: `url(${icon_location}`}}> 
                
                </div>
                <div className="vn_title">
                  Location
                </div>
                <div className="vn_desc">
                California, Sacrametno
                </div>
              </div>
            </div>
          </div>
          </div>
        </Zoom>
          
        </div>
      </div>
    </div>
  )
}
