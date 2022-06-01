class OrderFormsController < ApplicationController
  before_action :set_order_form, only: [:show, :update, :destroy]

  # GET /order_forms
  def index
    @order_forms = OrderForm.all

    render json: @order_forms
  end

  # GET /order_forms/1
  def show
    render json: @order_form
  end

  # POST /order_forms
  def create
    @order_form = OrderForm.new(order_form_params)

    if @order_form.save
      render json: @order_form, status: :created, location: @order_form
    else
      render json: @order_form.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /order_forms/1
  def update
    if @order_form.update(order_form_params)
      render json: @order_form
    else
      render json: @order_form.errors, status: :unprocessable_entity
    end
  end

  # DELETE /order_forms/1
  def destroy
    @order_form.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order_form
      @order_form = OrderForm.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_form_params
      params.fetch(:order_form, {})
    end
end
