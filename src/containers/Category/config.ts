export const CATEGORY_DATA = [
  {
    title: 'Kurtas',
    sub_title: 'Elevate style with versatile denims',
    image_url: '/assets/icons/kurta.jpg',
    new_image_url: '/assets/icons/kurta.jpg',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        tag: 'denim-products',
        sort_by: 'menu_order'
      }
    },
    color: '#BBD4EB88',
    background_color: '#E1F1FF66'
  },
  {
    title: 'Ethnic Wear',
    sub_title: 'Discover perfect fits for yourself',
    image_url: '/assets/icons/ethnic.jpg',
    new_image_url: '/assets/icons/ethnic.jpg',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        category: 'bottoms',
        sort_by: 'menu_order'
      }
    },
    color: '#F3E8C188',
    background_color: '#F9F2D766',
    subCategories: [
      {
        title: 'Skirts',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'skirts'
          }
        }
      },
      {
        title: 'Shorts',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'shorts'
          }
        }
      },
      {
        title: 'Jeans',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'jeans'
          }
        }
      },
      {
        title: 'Trousers',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'trousers'
          }
        }
      }
    ]
  },
  {
    title: 'Tops',
    sub_title: 'Amp up your style with our top',
    image_url: '/assets/icons/tops.jpg',
    new_image_url: '/assets/icons/tops.jpg',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        category: 'tops',
        sort_by: 'menu_order'
      }
    },
    color: '#CABFF188',
    background_color: '#EDE8FF66',
    subCategories: [
      {
        title: 'Blouses',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'blouses'
          }
        }
      },
      {
        title: 'Tshirts',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'tshirts'
          }
        }
      },
      {
        title: 'Shirts',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'shirts'
          }
        }
      },
      {
        title: 'Tank Tops',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'tank tops'
          }
        }
      }
    ]
  },
  {
    title: 'Maxi',
    sub_title: 'Comfort and stylish T-Shirts',
    image_url:
      '/assets/icons/maxi.jpg',
    new_image_url: '/assets/icons/maxi.jpg',
    color: '#F3E8C188',
    background_color: '#F9F2D766',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        category: 'tops',
        subcategory: 'tshirts',
        sort_by: 'menu_order'
      }
    }
  },
  {
    title: 'Bottoms',
    sub_title: 'Confidence starts with what you wear',
    image_url: '/assets/icons/bottoms.jpg',
    new_image_url: '/assets/icons/bottoms.jpg',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        category: 'dresses',
        sort_by: 'menu_order'
      }
    },
    color: '#EFC0BE88',
    background_color: '#FEE7E666',
    subCategories: [
      {
        title: 'Maxi',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'maxi'
          }
        }
      },
      {
        title: 'Midi',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'midi'
          }
        }
      },
      {
        title: 'Mini',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'mini'
          }
        }
      },
      {
        title: 'Bodycon',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'bodycon'
          }
        }
      }
    ]
  },
  {
    title: 'Shirts',
    sub_title: 'Comfort and stylish T-Shirts',
    image_url:
      '/assets/icons/shirts.jpg',
    new_image_url: '/assets/icons/shirts.jpg',
    color: '#F3E8C188',
    background_color: '#F9F2D766',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        category: 'tops',
        subcategory: 'tshirts',
        sort_by: 'menu_order'
      }
    }
  },
];
