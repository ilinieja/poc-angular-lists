import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ResourceService } from 'src/app/shared/resource/resource.service';

import { AggregatedPaymentsService } from '../aggregated-payments.service';
import { AggregatedPaymentModel } from '../payments.model';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['../../shared/styles/page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ResourceService<AggregatedPaymentModel>,
      useExisting: AggregatedPaymentsService,
    },
  ],
})
export class PaymentsPageComponent {}
