"use server";

export const fetchAnimeDetails = async (id: number) => {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data = await response.json();
  return data;
};
