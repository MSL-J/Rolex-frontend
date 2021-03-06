import React from 'react';
import { withRouter } from "react-router-dom";
import ClassicCollectionSlide from './Components/ClassicCollectionSlide/ClassicCollectionSlide';
import ProfessionalCollection from './Components/ProfessionalCollection/ProfessionalCollection';
import PageShare from "../Main/Component/PageShare/PageShare";
import SixGrid from './Components/SixGrid/SixGrid';
import SixGridBot from './Components/SixGrid/SixGridBot'
import Footer from '../../Components/Footer/Footer';
import './Collection.scss';

class Collection extends React.Component {
  render() {
    return (
      <div className='Collection'>
        <div className="videoBox">
          <video
            src="https://content.rolex.com/dam/watches/hubs/all-watches/videos/hub-collection-watches-cover.mp4"
            type="video/mp4"
            autoPlay
            muted
            playsinline
            loop
            preload="auto"
            className="sc-pRTZB jXSwJn"
          />
          <div className="videoTitle">
            <div>롤렉스 컬렉션</div>
            <div>컬렉션</div>
          </div>
        </div>
        <div className="LetteringBelowVedio">
          <div className="LetteringWrapper">
            <p>
              우수한 정확성을 지닌 품격있는 롤렉스 컬렉션에 대해 자세히 알아보시기 바랍니다.
                        </p>
            <p>
              롤렉스는 프로페셔널 워치부터 클래식 워치까지 어떤 상황에도 어울리는 다양한 모델을 선보입니다. 스타일과 기능이 완벽하게 어우러진 롤렉스 시계의 다양한 셀렉션을 만나보시기 바랍니다.
                        </p>
          </div>
        </div>
        <ClassicCollectionSlide />
        <ProfessionalCollection />
        <div className="TheSecondLettering">
          <div className="SndLetteringWrapper">
            <p>
              롤렉스는 프로페셔널 워치부터 클래식 워치까지 어떤 상황에도 어울리는 다양한 모델을 선보입니다.
                        </p>
            <p>
              선호하는 모델, 소재, 베젤, 다이얼, 브레슬릿을 선택하여 롤렉스 컬렉션을 만나보시기 바랍니다.
                        </p>
          </div>
        </div>
        <div className="SixGridWrapper">
          <div className="CollectionWord">시계 골라보기</div>
          <SixGrid />
          <SixGridBot />
        </div>
        <PageShare />
      </div>
    )
  }
}

export default withRouter(Collection);