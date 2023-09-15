export interface HomePageCarousalApiData {
  image_url: string;
  click_event: {
    event_type: string;
    params: {
      tag: string;
    };
  };
}
