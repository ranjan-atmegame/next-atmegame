import { API_URL } from "@/config";

export const getAllBlogs = async (limit, skip = 0, order = "addDate:asc") => {
  const response = await fetch(
    `${API_URL}/blog?limit=${limit}&skip=${skip}&order=${order}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const { status, result } = await response.json();
  if (status !== "success") {
    console.log("Could not fetch data");
    return {};
  }
  return result;
};

export const getBlogByUrl = async (url) => {
  const response = await fetch(`${API_URL}/blog/${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const { status, result } = await response.json();
  if (status !== "success") {
    console.log("Could not fetch data");
    return {};
  }

  return result;
};

export const newsSubscribe = async (data) => {
  return fetch(`${API_URL}/newsletter`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("Error: ", err);
      return { status: 500, error: "Something went wrong" };
    });
};

// export const newsSubscribe = async (data) => {
//   return fetch(`${API_URL}/newsletter`, {
//     method: "POST",
//     body: JSON.stringify(data),
//   }).then((response) => {
//     return response.json();
//   }).catch((err) => {
//     console.log("Error: ", err);
//     return { status: 500, error: "Something went wrong" };
//   });
// }

export const relatedCat = async (
  isMainMenu = true,
  order = "order:asc",
  limit = 10
) => {
  const response = await fetch(
    `${API_URL}/category?isMainMenu${isMainMenu}&order${order}&limit${limit}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const { status, result } = await response.json();
  if (status !== "success") {
    console.log("Could not fetch data");
    return {};
  }

  return result;
};



