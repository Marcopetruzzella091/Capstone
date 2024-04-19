<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id_sender');
            $table->foreign('user_id_sender')->references('id')->on('users')
                    ->onUpdate('cascade')->onDelete('cascade');


            $table->foreignId('user_id_receiver');
            $table->foreign('user_id_receiver')->references('id')->on('users')
                    ->onUpdate('cascade')->onDelete('cascade');

            $table->foreignId('post_id');
            $table->foreign('post_id')->references('id')->on('posts')
                    ->onUpdate('cascade')->onDelete('cascade');

           
            $table->string('notification_content');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
