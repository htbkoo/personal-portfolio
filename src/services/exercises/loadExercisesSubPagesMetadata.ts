import { type SubPagesType } from "@/src/model/SectionMetadata";

type LoadExercisesSubPagesMetadataReturnType = {
    data: SubPagesType | null;
    error: Error | null;
    loading: boolean;
};

export const loadExercisesSubPagesMetadata = async (): Promise<LoadExercisesSubPagesMetadataReturnType> => {
    const { exercisesLoader } = await import("@/src/services/exercises/exercisesLoader");

    const { data, error } = await exercisesLoader.load();
    if (error) {
        return { error, data: null, loading: false };
    }

    const { convertExerciseItemsToSubPagesMetaData } = await import(
        "@/src/services/exercises/convertExerciseItemsToSubPagesMetaData"
    );
    return { data: convertExerciseItemsToSubPagesMetaData(data), error: null, loading: false };
};
