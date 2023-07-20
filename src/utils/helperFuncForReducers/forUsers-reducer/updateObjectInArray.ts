import { UsersPageType, UsersType } from "Redux/users-reducer";

type NewObjType = {
    followed: boolean;
};

export const updateObjectInArray = (
    items: UsersType[],
    itemId: number,
    objPropName: keyof UsersType,
    newObjProps: NewObjType,
) => {
    return items.map((u) => (u[objPropName] === itemId ? { ...u, ...newObjProps } : u));
};
