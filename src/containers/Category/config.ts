export const CATEGORY_DATA = [
  {
    title: 'Denims',
    sub_title: 'Elevate style with versatile denims',
    image_url: 'https://assets.newme.asia/wp-content/uploads/2023/01/21074057/NM-IN-54-JNS-23-JAN-10-BLACK-1.webp',
    new_image_url: 'https://assets.newme.asia/wp-content/uploads/2023/07/28083814/img_denims.png',
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
    title: 'Bottoms',
    sub_title: 'Discover perfect fits for yourself',
    image_url: 'https://assets.newme.asia/wp-content/uploads/2023/03/03092105/NM-IN-54-JNS-23-JAN-20-DARKBLUE-1-5.webp',
    new_image_url: 'https://assets.newme.asia/wp-content/uploads/2023/07/28083811/img_bottoms.png',
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
    image_url: 'https://assets.newme.asia/wp-content/uploads/2022/11/09121143/NM-IN-50-TAT-22-NOV-70-RED-1.webp',
    new_image_url: 'https://assets.newme.asia/wp-content/uploads/2023/07/28083819/img_tops.png',
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
    title: 'Tshirts',
    sub_title: 'Comfort and stylish T-Shirts',
    image_url:
      'https://assets.newme.asia/wp-content/uploads/2023/03/23150100/NM-IN-50-TSH-23-MAR-32-BLACK-8-scaled.webp',
    new_image_url: 'https://assets.newme.asia/wp-content/uploads/2023/07/28083821/img_tshirts.png',
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
    title: 'Dresses',
    sub_title: 'Confidence starts with what you wear',
    image_url: 'https://assets.newme.asia/wp-content/uploads/2023/02/22165458/NM-PRC-45-DRS-23-FEB-674-BLACK-1.webp',
    new_image_url: 'https://assets.newme.asia/wp-content/uploads/2023/07/28083816/img_dresses.png',
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
    title: 'Co ords',
    sub_title: 'Matching sets that redefine fashion',
    image_url: 'https://assets.newme.asia/wp-content/uploads/2023/03/06070031/NM-IN-53-CRD-23-JAN-127-RED2-3.webp',
    new_image_url: 'https://assets.newme.asia/wp-content/uploads/2023/07/28083812/img_coords.png',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        category: 'co-ords',
        sort_by: 'menu_order'
      }
    },
    color: '#EFC0BE88',
    background_color: '#FEE7E666'
  },
  {
    title: 'Jumpsuits/Bodysuits',
    sub_title: 'Express yourself boldly with onesies',
    image_url: 'https://assets.newme.asia/wp-content/uploads/2023/01/20083637/NM-IN-JMP-53-23-JAN-76-DARKBLUE-1.webp',
    new_image_url: 'https://assets.newme.asia/wp-content/uploads/2023/07/28083817/img_jumpsuits.png',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        category: 'jumpsuits/bodysuits',
        sort_by: 'menu_order'
      }
    },
    color: '#BBD4EB88',
    background_color: '#E1F1FF66',
    subCategories: [
      {
        title: 'Jumpsuits',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'jumpsuits'
          }
        }
      },
      {
        title: 'Bodysuits',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'bodysuits'
          }
        }
      },
      {
        title: 'Playsuits',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'playsuits'
          }
        }
      }
    ]
  },
  {
    title: 'Winterwear',
    sub_title: 'Cosy and stylish winter essentials',
    image_url: 'https://assets.newme.asia/wp-content/uploads/2022/11/29011212/NM-IN-50-SWT-22-NOV-178-PINK-2.webp',
    new_image_url: 'https://assets.newme.asia/wp-content/uploads/2023/07/28083822/img_winter.png',
    click_event: {
      event_type: 'PRODUCT_LISTING',
      params: {
        category: 'winterwear',
        sort_by: 'menu_order'
      }
    },
    color: '#CABFF188',
    background_color: '#EDE8FF66',
    subCategories: [
      {
        title: 'Sweaters',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'sweaters'
          }
        }
      },
      {
        title: 'Sweatshirts',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'sweatshirts'
          }
        }
      },
      {
        title: 'Coats',
        click_event: {
          event_type: 'PRODUCT_LISTING',
          params: {
            sort_by: 'menu_order',
            subcategory: 'coats'
          }
        }
      }
    ]
  }
];
