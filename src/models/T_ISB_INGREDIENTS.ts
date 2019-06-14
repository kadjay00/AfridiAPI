import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ISB_INGREDIENTS', {schema: 'dbo' } )
export class T_ISB_INGREDIENTS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IIN_INGRDEPARTMENT_N',
        })
    public IIN_INGRDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 7,
        name: 'IIN_INGRGIBREF_C',
        })
    public IIN_INGRGIBREF_C: string;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IIN_INGRIDNUMBER_C',
        })
    public IIN_INGRIDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IIN_DESCRIPNED_C',
        })
    public IIN_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IIN_DESCRIPFRA_C',
        })
    public IIN_DESCRIPFRA_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IIN_PURCHASEPRICE_N',
        })
    public IIN_PURCHASEPRICE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IIN_FLAGDELETE_C',
        })
    public IIN_FLAGDELETE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IIN_PRICECURRENCY_C',
        })
    public IIN_PRICECURRENCY_C: string | null;

}
