const orderData = [
  {
    href: "/hub/hub_order/pending_order",
    title: "Pending Orders",
    color: "#e9f3f7",
    bgColor: "#399CBD",
    icon: (
      <svg
        className="absolute right-0 top-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="77"
        viewBox="0 0 120 77"
        fill="none"
      >
        <g clip-path="url(#clip0_3937_2995)">
          <path
            d="M0 76.5957V35.7447L16.5957 47.234L29.3617 24.2553L44.6809 35.7447L60 0L79.1489 29.3617L91.9149 66.383L102.128 42.1277L120 35.7447V76.5957H0Z"
            fill="#399CBD"
            fill-opacity="0.1"
          />
          <path
            d="M0 35.7447L16.5957 47.234L29.3617 24.2553L44.6808 35.7447L60 0L79.1489 29.3617L91.9149 66.383L102.128 42.1277L120 35.7447"
            stroke="#399CBD"
            stroke-width="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_3937_2995">
            <rect width="120" height="77" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    status: "pending",
  },
  {
    href: "/hub/hub_order/received_order",
    title: "Received Orders",
    color: "#f5ddcb",
    bgColor: "#CE600A",
    icon: (
      <svg
        className="absolute right-0 top-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="77"
        viewBox="0 0 120 77"
        fill="none"
      >
        <g clip-path="url(#clip0_4808_25954)">
          <path
            d="M0 76V31.708L11 42.5L22 10L41.5 23.311V42.5L60.5 15L77.5 46.5L99.5 10L120 31.708V76H0Z"
            fill="#CE600A"
            fill-opacity="0.1"
          />
          <path
            d="M0 30.708L11 41.5L22 9L41.5 22.311V41.5L60.5 14L77.5 45.5L99.5 9L120 30.708"
            stroke="#CE600A"
          />
        </g>
        <defs>
          <clipPath id="clip0_4808_25954">
            <rect width="120" height="77" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    status: "confirmed",
  },
  {
    href: "/hub/hub_order/completed_order",
    title: "Completed Orders",
    color: "#cff4e9",
    bgColor: "#00BE85",
    icon: (
      <svg
        className="absolute right-0 top-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="77"
        viewBox="0 0 120 77"
        fill="none"
      >
        <g clip-path="url(#clip0_3937_3023)">
          <path
            d="M0 76V31.708L19.5 0L26 31.708L41.5 23.311L51 52.5852L67.5 35.2375L81.5 8.67385L99.5 38.4902L120 31.708V76H0Z"
            fill="#00BE85"
            fill-opacity="0.1"
          />
          <path
            d="M0 31.708L19.5 0L26 31.708L41.5 23.311L51 52.5852L67.5 35.2375L81.5 8.67385L99.5 38.4902L120 31.708"
            stroke="#00BE85"
          />
        </g>
        <defs>
          <clipPath id="clip0_3937_3023">
            <rect width="120" height="77" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    status: "delivered",
  },
  {
    href: "/hub/hub_order/orders_to_receive",
    title: "Orders to receive",
    color: "#edf5ce",
    bgColor: "#7B9607",
    icon: (
      <svg
        className="absolute right-0 top-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="77"
        viewBox="0 0 120 77"
        fill="none"
      >
        <g clip-path="url(#clip0_4882_10811)">
          <path
            d="M0 77V33.636L10.5 13.5L15 49L23 22L50.5 8.5L59 41.5L80 3.5L88.5 47.7067L104 22L120 33.636V77H0Z"
            fill="#7B9607"
            fill-opacity="0.1"
          />
          <path
            d="M0 33.136L10.5 13L15 48.5L23 21.5L50.5 8L59 41L80 3L88.5 47.2067L104 21.5L120 33.136"
            stroke="#7B9607"
          />
        </g>
        <defs>
          <clipPath id="clip0_4882_10811">
            <rect width="120" height="77" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    status: "to-receive",
  },
  {
    href: "/hub/hub_order/shipped_out_order",
    title: "Shipped out orders",
    color: "#ecd8ec",
    bgColor: "#770077",
    icon: (
      <svg
        className="absolute right-0 top-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="77"
        viewBox="0 0 120 77"
        fill="none"
      >
        <g clip-path="url(#clip0_3937_3039)">
          <path
            d="M0 77V33.636L10.5 50.8912L23.5 47.7067L24.5 31.2532L43 1L60 36.03L79.1489 26.8603L88.5 47.7067L101.5 37.6223L120 33.636V77H0Z"
            fill="#770077"
            fill-opacity="0.1"
          />
          <path
            d="M0 32.636L10.5 49.8912L23.5 46.7067L24.5 30.2532L43 0L60 35.03L79.1489 25.8603L88.5 46.7067L101.5 36.6223L120 32.636"
            stroke="#770077"
          />
        </g>
        <defs>
          <clipPath id="clip0_3937_3039">
            <rect width="120" height="77" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    status: "shipped",

  },
  {
    href: "/hub/hub_order/canceled_order",
    title: "Canceled Orders",
    color: "#f2dbe1",
    bgColor: "#AA2B55",
    icon: (
      <svg
        className="absolute right-0 top-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="77"
        viewBox="0 0 120 77"
        fill="none"
      >
        <g clip-path="url(#clip0_3937_3003)">
          <path
            d="M0 76.5957V17L15 35.7447L25.5 24L36 40.5L62 32L80 0L89 37L102.128 42.1277L120 35.7447V76.5957H0Z"
            fill="#BD395A"
            fill-opacity="0.1"
          />
          <path
            d="M0 17L15 35.7447L25.5 24L36 40.5L62 32L80 0L89 37L102.128 42.1277L120 35.7447"
            stroke="#BD395A"
          />
        </g>
        <defs>
          <clipPath id="clip0_3937_3003">
            <rect width="120" height="77" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    status: "cancelled",
  },
];

export default orderData;
