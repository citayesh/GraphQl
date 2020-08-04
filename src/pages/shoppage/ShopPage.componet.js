import React from "react";
import {ShopPageContainer} from "./ShopPage.style"
import { Route } from "react-router-dom";
import {default as CollectionsOverview} from "../../components/collections-overview/CollectionsOverview.container";
import {default as CollectionPage} from "../collection/Collection.container";

function ShopPage({match}){
return(

<ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
</ShopPageContainer>
)
}
export default ShopPage;
