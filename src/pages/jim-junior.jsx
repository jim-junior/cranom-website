import React from 'react'
import clsx from 'clsx';
import styles from './profile.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import * as icons from 'react-icons/md'
import { YoutubePlayer, Image } from 'reactjs-media'
import LayoutC from './_layout';


const MyProfile = () => {
    return (
        <LayoutC
            title="Beingana Jim Junior"
            description="Professional Web Developer">
            <div>
                <div className="container">
                    <section className={clsx("row mmm", styles.mmm)}>
                        <div className="col col--4">
                            <img className={styles.pi} src="/img/26232122_575464682791788_937194064396236177_o.jpg" alt="Beingana Jim Junior" /></div>
                        <div className="col col--4">
                            <h3>Beingana Jim Junior</h3>
                            <p>Beingana Jim Junior is the main developer at The Blurifly projects and is determined to develop code for the community. He is a Seventeen year old Software developer who specializes in Python and Javascript.</p>


                        </div>
                    </section>
                </div>
            </div>
        </LayoutC>
    )
}

export default MyProfile
