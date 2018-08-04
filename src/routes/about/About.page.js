import React from 'react';
import styles from './About.page.less';
import Page from 'components/page';

function AboutPage() {
  return (
      <Page>
        <Page.Header>
          <Page.Title>About</Page.Title>
        </Page.Header>
        <Page.Content scroll>
          <div className={styles.about}>
            <div className={styles.welcome}/>
            <ul className={styles.list}>
              <li>Demo is created by Yury Goltsman.</li>
              <br/>
              <li>It is based on React and <a href='https://github.com/dvajs/dva' target='_blank'
                                             rel='noopener noreferrer'>DVA</a> framework,
                which transparently integrates:
                <ul>
                  <li>Redux</li>
                  <li>Saga (middleware for Redux)</li>
                  <li>Router</li>
                  <li>Some other cool technologies</li>
                </ul>
              </li>
              <br/>
              <li>Build system uses <a href='https://github.com/sorrycc/roadhog' target='_blank'
                                              rel='noopener noreferrer'>Roadhog</a> -
                configurable version of create-react-app
              </li>
            </ul>
          </div>
        </Page.Content>
      </Page>
  );
}

export default AboutPage;
