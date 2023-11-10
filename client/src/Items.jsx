import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
const Items = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading ....</p>;
  }
  if (isError) {
    return <p style={{ marginTop: "1rem" }}>There was an error ...</p>;
  }
  if (error) {
    return <p style={{ marginTop: "1rem" }}>{error.message}</p>;
  }
  if(data.taskList.length===0){
    return <p style={{ marginTop: "1rem" }}>No Items to show</p>
  }
  return (

    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
