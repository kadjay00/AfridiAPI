import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEHISTO', {schema: 'dbo' } )
export class T_PRICEHISTO {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PRH_IDNUMBER_C',
        })
    public PRH_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PRH_PRICESTARTTIME_DAT',
        })
    public PRH_PRICESTARTTIME_DAT: Date;

    @Column('char', {
        nullable: false,
        name: 'PRH_PRICETYPE_C',
        })
    public PRH_PRICETYPE_C: string;

    @Column('char', {
        nullable: false,
        name: 'PRH_LOCALINPUT_C',
        })
    public PRH_LOCALINPUT_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PRH_ACTIVECOSTPRICE_D',
        })
    public PRH_ACTIVECOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRH_ACTIVESELLINGPRICE_D',
        })
    public PRH_ACTIVESELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PRH_ACTIVEPROFITPERCENT_D',
        })
    public PRH_ACTIVEPROFITPERCENT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PRH_ACTIVEPROFITCODE_C',
        })
    public PRH_ACTIVEPROFITCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PRH_PRICECURRENCY_C',
        })
    public PRH_PRICECURRENCY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'PRH_PROMOTIONID_C',
        })
    public PRH_PROMOTIONID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PRH_PRICEGROUP_C',
        })
    public PRH_PRICEGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PRH_USERID_C',
        })
    public PRH_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'PRH_REASON_C',
        })
    public PRH_REASON_C: string | null;

}
