import { client } from "@/lib/strapiClient";
import { requestHandler } from "../../requestHandler";

export async function getAllProperties() {
  return requestHandler(async () => {
    const propertiesAPI = client.collection("properties");

    return propertiesAPI.find({
      populate: "*",
    });
  });
}

export async function getPropertiesSearch(search_params = {}) {
  return requestHandler(async () => {
    const propertiesAPI = client.collection("properties");
    const filters = {};

    if (search_params.parish) {
      const parishes = Array.isArray(search_params.parish)
        ? search_params.parish
        : [search_params.parish];

      filters.parish = {
        name: {
          $in: parishes,
        },
      };
    }

    if (search_params.property_status) {
      const property_statuses = Array.isArray(search_params.property_status)
        ? search_params.property_status
        : [search_params.property_status];

      filters.property_status = {
        code: {
          $in: property_statuses,
        },
      };
    }

    if (search_params.min_price || search_params.max_price) {
      filters.price = {};

      if (search_params.min_price)
        filters.price.$gte = Number(search_params.min_price);

      if (search_params.max_price)
        filters.price.$lte = Number(search_params.max_price);
    }

    if (search_params.bathrooms) {
      filters.bathrooms = {
        $gte: Number(search_params.bathrooms),
      };
    }

    if (search_params.property_ameneties) {
      const property_ameneties = Array.isArray(search_params.property_ameneties)
        ? search_params.property_ameneties
        : [search_params.property_ameneties];

      filters.property_ameneties = {
        slug: {
          $in: property_ameneties,
        },
      };
    }

    if (search_params.property_location_types) {
      const property_location_types = Array.isArray(
        search_params.property_location_types,
      )
        ? search_params.property_location_types
        : [search_params.property_location_types];

      filters.property_location_types = {
        slug: {
          $in: property_location_types,
        },
      };
    }

    if (search_params.bedrooms) {
      const bedrooms = Number(search_params.bedrooms);

      filters.bedrooms = bedrooms >= 4 ? { $gte: bedrooms } : { $eq: bedrooms };
    }

    if (search_params.min_square_feet || search_params.max_square_feet) {
      filters.floor_area = {};

      if (search_params.min_square_feet)
        filters.floor_area.$gte = Number(search_params.min_square_feet);

      if (search_params.max_square_feet)
        filters.floor_area.$lte = Number(search_params.max_square_feet);
    }

    return propertiesAPI.find({
      filters,
      populate: "*",
    });
  });
}

export async function getPropertyBySlug(slug) {
  return requestHandler(
    async () => {
      const propertiesAPI = client.collection("properties");

      return propertiesAPI.find({
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: "*",
      });
    },
    { single: true },
  );
}
