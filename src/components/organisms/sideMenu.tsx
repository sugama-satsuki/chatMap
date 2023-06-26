import React from 'react';

import styles from "./sideMenu.module.css";

import Avatar from '@mui/material/Avatar';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';



export const SideMenu:React.FC = () => {
    return (
        <div className={styles.sideMenu}>
            <div className={styles.nav}>
                <ul>
                    <li className={styles.title}><a>ホーム</a></li>
                </ul>
                <ul>
                    <li className={styles.title}>地図</li>
                    <li><a>
                        <CodeRoundedIcon className={styles.icon}/>
                        <span>APIキーの管理</span>
                    </a></li>
                </ul>
                <ul>
                    <li className={styles.title}>チーム設定</li>
                    <li><a>
                        <ListRoundedIcon className={styles.icon} />
                        <span>一般</span>
                    </a></li>
                    <li><a>
                        <PeopleRoundedIcon className={styles.icon} />
                        <span>メンバー</span>
                    </a></li>
                    <li><a>
                        <CreditCardRoundedIcon className={styles.icon} />
                        <span>支払い</span>
                    </a></li>
                </ul>
                <ul>
                    <li className={styles.title}>ドキュメント</li>
                    <li><a>
                        <DescriptionRoundedIcon className={styles.icon} />
                        <span>公式ドキュメント</span>
                    </a></li>
                </ul>
            </div>
            <div className={styles.userInfo}>
                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + "/imgs/IMG_0468.PNG"} sx={{ width: 24, height: 24 }} className={styles.avatar}/>
                <div className={styles.text_area}>
                    <span>ユーザー名</span>
                    <span className={styles.authority}>権限⚪︎⚪︎</span>
                </div>
            </div>
        </div>
    )
}