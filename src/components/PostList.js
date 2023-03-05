import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const notlar = useSelector((depo) => depo.notlar);
  /*   const dispatch = useDispatch();
  const notlar = useSelector((store) => store.notlar);

  useEffect(() => {
    dispatch(baslangicNotları());
  }, []); */

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
      {/* <button
        onClick={() => dispatch(gelenleriSil())}
        className="transition-colors hover: bg-slate-500"
        type="button"
      >
        Geçmiş minnetlerinizi siliniz.
      </button> */}
    </div>
  );
};

export default PostList;
