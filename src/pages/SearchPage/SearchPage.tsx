import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import Slider from '../../components/Slider/Slider';
import CardItem from '../../shared/components/CardItem/CardItem';
import { CollectionType, ItemType } from '../../types';

interface ISearchPage {
  userId: number;
  listSearch: any;
  setTargetCollection: (collection: CollectionType) => void;
  getTargetUserCollections: (id: number, page?: number) => void;
  setTargetItem: (item: ItemType) => void;
  toogleLike: (userId: number, itemId: number) => void;
  likes: { itemId: number }[] | null;
}

const SearchPage: FC<ISearchPage> = ({
  listSearch,
  setTargetCollection,
  getTargetUserCollections,
  setTargetItem,
  userId,
  toogleLike,
  likes,
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
        <CardItem
          likes={likes}
          item={data as ItemType}
          setTargetItem={setTargetItem}
          userId={userId}
          toogleLike={toogleLike}
        />
      )))}
    </>
  );
};

export default SearchPage;
