<?php

namespace App\Listeners;

use App\Events\NotificationCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class listenernotify
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(NotificationCreated $event): void
    {
       dd( $event);
    }
}
