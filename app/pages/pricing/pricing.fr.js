import React from 'react';
import Translation from '../../components/translation/translation';
import { Link } from 'react-router';

export default class PricingFr extends React.Component {
  displayName = 'PricingFr'

  render() {
    return (
      <Translation locales='fr-FR'>
        <div className='page-hero--pricing page-hero'>
          <div className='site-container'>
            <div className='grid pricing-options u-center u-padding-Bxl'>
              <div className='grid__cell u-size-1of2 u-padding-Vxl u-padding-Rxs'>
                <div className='u-padding-Rxs'>
                  <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>GoCardless</h1>
                  <div className='u-background-primary u-padding-Vxl'>
                    <h2 className='u-text-heading-light u-text-center u-color-invert u-text-xl'>1%</h2>
                    <p className='u-text-heading-light u-text-center u-color-invert u-text-s u-margin-Txxs'>
                      Par transaction, plafonné à 2€
                    </p>
                  </div>
                  <ul className='pricing-options__list'>
                    <li className='pricing-options__list-item u-color-heading'>
                      <b>Pour les TPE et PME qui recherchent la simplicité</b>
                    </li>
                    <li className='pricing-options__list-item'>
                      Utilisable sans intégration
                    </li>
                    <li className='pricing-options__list-item'>
                      Pour les entreprises collectant <b>1 à 500 paiements</b> par mois
                    </li>
                    <li className='pricing-options__list-item'>
                      <Link to='pro'>En apprendre plus sur notre produit</Link>
                    </li>
                    <li className='pricing-options__list-button'>
                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>
                        Contactez-nous
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='grid__cell u-size-1of2 u-padding-Vxl u-padding-Rxs'>
                <div className='u-padding-Lxs'>
                  <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>GoCardless Pro</h1>
                  <div className='u-background-dark-gray-darken u-padding-Vxl'>
                    <h2 className='u-text-heading-light u-text-center u-color-invert u-text-xl'>0,01 — 0,60 €</h2>
                    <p className='u-text-heading-light u-text-center u-color-invert u-text-s u-margin-Txxs'>
                      Par transaction
                    </p>
                  </div>
                  <ul className='pricing-options__list'>
                    <li className='pricing-options__list-item u-color-heading'>
                      <b>Pour les entreprises qui souhaitent un contrôle total</b>
                    </li>
                    <li className='pricing-options__list-item'>
                      <b>+ 250 € par mois</b>, pas de frais cachés
                    </li>
                    <li className='pricing-options__list-item'>
                      Pour les entreprises collectant <b>plus de 500 paiements</b> par mois
                    </li>
                    <li className='pricing-options__list-item'>
                      <Link to='pro'>En apprendre plus sur notre produit</Link>
                    </li>
                    <li className='pricing-options__list-button'>
                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>
                        Contactez-nous
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-heading'>Nos tarifs</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-heading'>
                <b>
                  Y a-t'il d'autres frais ?
                </b>
              </div>
              <p className='u-color-p'>
                Non, il n'y aucun autre frais que ceux indiqués ci-dessus. Nous ne vous facturons jamais les paiements qui ont échoué, les remboursements, les créations de mandats...
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Offrez-vous des réductions ?</b>
              </div>
              <p className='u-color-p'>
                Oui. Nos frais par transaction sont dégressifs à partir de 1.000 paiements par mois.
                Pour en savoir plus, <Link to='contact_sales' className='u-link-color-p u-text-underline'>contactez-nous</Link>
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
              <div className='u-color-heading'>
                <b>Y a-t'il des frais d'implémentation ?</b>
              </div>
              <p className='u-color-p'>
                Non. Vous ne payez pas pour implémenter GoCardless et notre support est gratuit.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Serai-je facturé si un paiement échoue ?</b>
              </div>
              <p className='u-color-p'>
                Non. Nous ne facturons que les paiements réussis.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-heading u-text-light'>Avez-vous des questions ?</h2>
            <p className='u-color-p u-margin-Ts'>Contactez-nous au +33 9 75 18 42 95 (FR)<br />+32 78 48 09 94 (BE)</p>
            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'>
              Contactez-nous
            </Link>
          </div>
        </div>
      </Translation>
    );
  }
}
