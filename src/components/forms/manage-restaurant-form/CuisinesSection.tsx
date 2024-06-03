import { useFormContext } from "react-hook-form";

import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CuisineCheckbox } from "./CuisineCheckbox";
import { cuisineList } from "@/config/restaurant-options-config";

export const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <ul className="grid md:grid-cols-5 gap-1">
              {cuisineList.map((cuisineItem, index) => (
                <li key={index}>
                  <CuisineCheckbox cuisine={cuisineItem} field={field} />
                </li>
              ))}
            </ul>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
