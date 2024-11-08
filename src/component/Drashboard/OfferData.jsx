import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Text, SimpleGrid } from '@chakra-ui/react';

const OfferData = ({ updateData, offersList, deleteOffer }) => {
  return (
    <Box>
      {offersList.length === 0 ? (
        <Text mb={4} color="gray.500">
          No active offers found. Create a new offer to get started!
        </Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {offersList.map((offer) => (
            <Box key={offer._id} borderWidth="1px" p={3} borderRadius="md">
              <Text><strong>Name:</strong> {offer.name}</Text>
              <Text><strong>Description:</strong> {offer.description}</Text>
              <Text><strong>Discount:</strong> {offer.discount}%</Text>
              <Text><strong>Start Date:</strong> {new Date(offer.startDate).toLocaleDateString()}</Text>
              <Text><strong>Expiry Date:</strong> {new Date(offer.endDate).toLocaleDateString()}</Text>
              <Button 
                colorScheme="red" 
                mt={2} 
                mr={2} 
                onClick={() => deleteOffer(offer._id)}
                aria-label={`Delete offer: ${offer.name}`}
              >
                Delete Offer
              </Button>
              <Button
                colorScheme="teal"
                mt={2}
                onClick={() => updateData(true, offer)}
                aria-label={`Edit offer: ${offer.name}`}
              >
                Edit Offer
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

OfferData.propTypes = {
  updateData: PropTypes.func.isRequired,
  offersList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      discount: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteOffer: PropTypes.func.isRequired,
};

export default OfferData;
