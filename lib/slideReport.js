function create (description, geoLocation, hazzardLevel, images, created_at) {
	return {
		description: description,
    geoLocation: geoLocation,
		hazzardLevel: hazzardLevel,
		images: images,
		created_at: created_at
	};
}

exports.create = create;