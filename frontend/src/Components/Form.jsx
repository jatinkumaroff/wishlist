import { useState } from "react";
const Form = () => {
  const [title, setTitle] = useState("asf");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [priority, setPriority] = useState(0);
  const [currentPrice, setCurrentPrice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, url, imageUrl, priority, currentPrice };
    await fetch("backend api", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex flex-col gap-2 p-7">
      <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="title"
          placeholder="title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name=""
          id="link"
          placeholder="https://"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          name=""
          id="imageUrl"
          placeholder="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input type="file" name="" id="imageFile" placeholder="imageFile" />
        <input
          type="number"
          name=""
          id="priority"
          placeholder="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <input
          type="number"
          name=""
          id="currentPrice"
          placeholder="current price "
          value={currentPrice}
          onChange={(e) => setCurrentPrice(e.target.value)}
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default Form;
