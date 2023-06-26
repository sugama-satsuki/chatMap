import React from 'react';

import styles from "./test1.module.css";

import { GeoloniaMap } from '@geolonia/embed-react';


export const TestPage:React.FC = () => {

    return (
        <div className={styles.page_wrapper}>
            {/* メインコンテンツ */}
            <div className={styles.page_inner}>
                {/* 地図表示エリア */}
                <div className={styles.geo_area}>
                    <GeoloniaMap
                        apiKey="3407afe23e7c46cca1391c93f9f84567"
                        style={{height: "100%", width: "100%"}}
                        lat="36.5"
                        lng="139"
                        zoom="5"
                    />
                </div>
                {/* チャットエリア */}
                {/* <div className={`${styles.chat_area} ${styles.light}`}>
                    <div className={styles.chat_area_inner}>
                        <div className={styles.msg_area}>
                            <div className={`${styles.msg} ${styles.bot_msg}`}>
                                こんにちは、どんな地図を表示しますか？
                            </div>

                            <div className={`${styles.msg} ${styles.user_msg} ${styles.msg_right}`}>
                                高松市のマップを表示して!!
                            </div>

                        </div>
                        <div className={styles.input_area}>
                            <button className={styles.cleanBtn}></button>
                            <input type='text' placeholder='入力してください。'/>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}