import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import Slider from '../../components/Slider/Slider';
import CardItem from '../../shared/components/CardItem';
import { CollectionType, ItemType } from '../../types';

interface ISearchPage {
  listSearch: any;
  setTargetCollection: (collection: CollectionType) => void;
  getTargetUserCollections: (id: number, page?: number) => void;
  setTargetItem: (item: ItemType) => void;
}

const SearchPage: FC<ISearchPage> = ({
  listSearch,
  setTargetCollection,
  getTargetUserCollections,
  setTargetItem,
}) => {
  if (!listSearch) return <Box>0 result</Box>;

  return (
    <>
      Search result
      {' '}
      {listSearch.length}
      {' '}
      {listSearch.length === 1 ? 'link' : 'links'}
      {listSearch.map((data: any) => (data?.name ? (
        <>
          <Typography variant="body2">
            {data.name}
            {' '}
            {data.surname}
          </Typography>
          <Slider
            collections={data.collections}
            id={data.id}
            setCollection={setTargetCollection}
            getUserCollections={getTargetUserCollections}
          />
        </>
      ) : (
        <CardItem item={data as ItemType} setTargetItem={setTargetItem} />
      )))}
    </>
  );
};

export default SearchPage;
