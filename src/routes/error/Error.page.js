import React from 'react';
import styles from './Error.page.less';
import Page from 'components/page';

const ErrorPage = ({text}) => (
    <Page>
      <Page.Header>
        <Page.Title>Error</Page.Title>
      </Page.Header>
      <Page.Content>
        <div className={styles.error}>
          <h1>{text}</h1>
        </div>
      </Page.Content>
    </Page>
);

ErrorPage.defaultProps = {
  text: '404 Not Found'
};

ErrorPage.displayName = 'ErrorPage';

export default ErrorPage;
