/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div >
        <img class="slogo" src={props.img_src} alt="Project Logo" />
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
        <Logo img_src={`${baseUrl}img/scrawler-PHP.svg`} />
          <PromoSection>
            <Button href="https://www.github.com/scrawler-php/scrawler">Github</Button>
            {/* <Button href={docUrl('doc2.html')}>Docs</Button>
            <Button href={docUrl('doc1.html')}>Get Started</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Features</h2>
        <MarkdownBlock>Some of scrawler features that developers would love!</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:'Scrawler keeps it as simple as possible, no more DI\'s no more heavy configuration. '+
            'Most of things like routing, configurations, and even storing forms to database are automatically taken care by framework! '+
            'You can achieve more by writing less amount of code.',
            image: `${baseUrl}img/easylearn.svg`,
            imageAlign: 'left',
            title: 'Easy to Learn, Fast to Develop',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content:
              'You can start using scrawler as API server for your application without writing single lines of code! '+
              'Scrawler comes packed with tool that automatically builds CRUD api for you.',
            image: `${baseUrl}img/app.svg`,
            imageAlign: 'right',
            title: 'Out Of the Box API Server.',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'No more making model classes, no more wasting time creating tables, just start adding data like NoSQL tables would be automatically created during development mode.',
            image: `${baseUrl}img/database.svg`,
            imageAlign: 'right',
            title: 'NoSQL Like SQL Database Usage',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Scrawler uses React PHP based PHP Process Manager which keeps Scrawler in memory and uses event loop to make it blazingly fast.',
            image: `${baseUrl}img/fast_loading.svg`,
            imageAlign: 'top',
            title: 'Blazingly Fast',
          },
          {
            content: 'Almost everything from database to routing is auto-wired,with less lines of code you can achieve more.',
            image: `${baseUrl}img/programming.svg`,
            imageAlign: 'top',
            title: '<br>Rapid Developmet',
          },
          {
            content: 'The framework can be extended using modules, even some of the core features are modules and can be removed!',
            image: `${baseUrl}img/modular.svg`,
            imageAlign: 'top',
            title: '<br>Highly Modular',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who uses Scrawler?</h2>
          <p>Scrawler is used as development framework in following companies</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
