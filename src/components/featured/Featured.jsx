import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar } from 'react-circular-progressbar'
import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown'
import  KeyboardArrowUpIcon  from '@mui/icons-material/KeyboardArrowUp'

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                {/* npm add react-circular-progressbar */}
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} className="icon-circle"/>
            </div>
            <p className="title" style={{color:"gray"}}>Total sales made today</p>
            <p className="amount">$420</p>
            <p className="description">Previous transactions processing. Last payments may not be included.</p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small" />
                        <div className="resultAmount">$12.4</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultAmount">$12.4</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small" />
                        <div className="resultAmount">$12.4</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Featured