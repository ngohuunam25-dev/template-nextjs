const URL_TKG_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

/**
 *
 * @param url
 * @param params
 * @returns
 */
const GET = async <T>(
  url: string,
  params: Record<string, string> | null = {},
  optionHeaders?: HeadersInit,
): Promise<T> => {
  let finalUrl = url.startsWith("http") ? url : `${URL_TKG_URL}/${url}`;
  if (params) {
    const queryString = new URLSearchParams(
      Object.entries(params)
        .map(([key, value]) => [key, String(value)])
        .toString(),
    );
    finalUrl += `?${queryString}`;
  }
  return await fetch(finalUrl, {
    headers: {
      "Content-Type": "application/json",
      ...optionHeaders,
    },
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(`HTTP error! status: ${err?.status}`);
    });
};

const POST = async <TResponse, TBody>(
  url: string,
  data: TBody,
  optionHeaders?: HeadersInit,
): Promise<TResponse> => {
  const finalUrl = url.startsWith("http") ? url : `${URL_TKG_URL}/${url}`;
  return fetch(finalUrl, {
    headers: {
      "Content-Type": "application/json",
      ...optionHeaders,
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error || `HTTP error! status: ${error?.status}`);
    });
};

const PUT = async <TResponse, TBody>(
  url: string,
  data: TBody,
  optionHeaders?: HeadersInit,
): Promise<TResponse> => {
  const finalUrl = url.startsWith("http") ? url : `${URL_TKG_URL}/${url}`;
  return fetch(finalUrl, {
    headers: {
      "Content-Type": "application/json",
      ...optionHeaders,
    },
    method: "PUT",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error || `HTTP error! status: ${error?.status}`);
    });
};

const DELETE = async <TResponse>(
  url: string,
  optionHeaders?: HeadersInit,
): Promise<TResponse> => {
  const finalUrl = url.startsWith("http") ? url : `${URL_TKG_URL}/${url}`;
  return fetch(finalUrl, {
    headers: {
      "Content-Type": "application/json",
      ...optionHeaders,
    },
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error || `HTTP error! status: ${error?.status}`);
    });
};
export { DELETE, GET, POST, PUT };
