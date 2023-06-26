import React from 'react';

import styles from "./header.module.css";

/* import mui */
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';




export const Header:React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_inner}>
                <div className={styles.logo}>
                    <img src={process.env.PUBLIC_URL + "/imgs/logo.png"} alt='Geoloina'/>
                </div>
                <div className={styles.info_area}>
                    <NotificationsNoneIcon className={styles.icon} />
                    <SettingsOutlinedIcon className={styles.icon} />
                </div>
            </div>
        </div>
    )
}