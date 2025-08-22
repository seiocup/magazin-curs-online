import React from "react";

const videos = [
  { title: "EP.1", url: "https://www.youtube.com/embed/urGfFp6vU34?si=qNKHmWxSHhBIzdxk" },
  { title: "EP.2", url: "https://www.youtube.com/embed/E00NOWQWLOU?si=Tmv1eYiGlMTRvvO4" },
  { title: "EP.3", url: "https://www.youtube.com/embed/3pEIV5bG0LI?si=GRRF-jHuE3d6YRi-" },
  { title: "EP.4", url: "https://www.youtube.com/embed/g1u2F6_V2i4?si=77TyYLWPTh0BVoLT" },
  { title: "EP.5", url: "https://www.youtube.com/embed/o6WQDq3b7uA?si=_R7xyadrDPGMp3ch" },
  { title: "EP.6", url: "https://www.youtube.com/embed/FkxoxAwLTsQ?si=24zpHhiQqAti72aL" },
  { title: "EP.7", url: "https://www.youtube.com/embed/KJ58F9pFfwM?si=8sE8DiIDn2CU8YD3" },
];

export default function CoursePage() {
  return (
    <div className="text-white text-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Felicitări! Ai acces la curs</h1>

      {videos.map((video) => (
        <div key={video.title} className="mb-6">
          <h2 className="text-xl font-bold mb-2">{video.title}</h2>
          <iframe
            width="100%"
            height="315"
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}

      <div className="mt-6 text-lg font-bold">
        TOCMAI CE AI FĂCUT PRIMUL PAS ÎN A-ȚI SCHIMBA VIAȚA.<br/>
        O SA TE CONTACTEZ PE TIKTOK CURÂND.<br/>
        NU UITA SĂ MĂ AI LA FOLLOW CA SĂ-ȚI POT DA MESAJ.
      </div>
    </div>
  );
}
