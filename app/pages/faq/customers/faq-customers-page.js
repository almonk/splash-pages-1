import React from 'react';
import { filterRouteByCategory } from '../../../router/route-helpers';
import Page from '../../../components/page/page';
import Message from '../../../components/message/message';
import Link from '../../../components/link/link';
import LinkExists from '../../../components/link-exists/link-exists';
import FaqHeader from '../faq-header';
import FaqSidebar from '../faq-sidebar';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class FaqCustomersPage extends React.Component {
  displayName = 'FaqCustomersPage';

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  };

  static contextTypes = {
    locales: PropTypes.locale,
    availableLocales: PropTypes.array.isRequired,
  }

  render() {
    const { locales, availableLocales } = this.context;
    const pages = filterRouteByCategory('faq.customers', locales, availableLocales);

    const faqNav = pages.map(function(page) {
      return (<li key={page.routeConfig.name}>
        <Link to={page.localeConfig.path} className='nav-tabs__link u-text-no-smoothing'>
          <Message message={`${page.routeConfig.name}.nav_title`} />
        </Link>
      </li>);
    });

    return (
      <Page isInverted={false}>
        <FaqHeader>
          <LinkExists to='faq_customers'>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
              Taking payments?&nbsp;
              <Link to='faq_merchants' className='u-text-underline u-link-invert'>
                Read our FAQ for merchants
              </Link>
            </p>
          </LinkExists>
        </FaqHeader>

        <div className='site-container u-padding-Vxxl grid'>
          <div className='u-padding-Vxl'>
            <div className='grid__cell u-size-4of12'>
              <FaqSidebar>
                <ul className='nav nav-tabs'>
                  { faqNav }
                </ul>
              </FaqSidebar>
            </div>

            <div className='grid__cell u-size-8of12'>
              {this.props.children}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
