import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from '../../firebase/firebase.utils';

// import { updateCollections } from '../../redux/shop/shop.actions';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
// import {
//   selectIsCollectionFetching,
//   selectIsCollectionLoaded,
// } from '../../redux/shop/shop.selectors';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

//import CollectionPage from '../collection/collection.component';
import CollectionPageContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.containter';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
// const ColelctionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');

    // // Promise pattern
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    // Observer pattern
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({ loading: false });
    //   }
    // );
  }

  render() {
    const { match /*isCollectionLoaded*/ } = this.props;
    // const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
          // render={(props) => (
          //   <CollectionsOverviewWithSpinner
          //     isLoading={isCollectionFetching}
          //     {...props}
          //   />
          // )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          // render={(props) => (
          //   <ColelctionPageWithSpinner
          //     isLoading={!isCollectionLoaded}
          //     {...props}
          //   />
          // )}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   isCollectionLoaded: selectIsCollectionLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
