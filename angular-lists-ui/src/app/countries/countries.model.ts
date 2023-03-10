import { ResourceModel } from 'src/app/shared/resource/resource.model';

export class CountryModel extends ResourceModel<CountryModel> {
  name!: string;
  flag!: string;
  code!: string;
  someWeirdServerFieldNameWithCount!: number | null;
}
