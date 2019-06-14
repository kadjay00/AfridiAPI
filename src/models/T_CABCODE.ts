import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CABCODE', {schema: 'dbo' } )
@Index('IX_CABCODE_PKINDEX', ['CAB_CABCODE_C'], {unique: true})
export class T_CABCODE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CAB_CABCODE_C',
        })
    public CAB_CABCODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAB_DESCRIPNED_C',
        })
    public CAB_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAB_DESCRIPFRA_C',
        })
    public CAB_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'CAB_USERID_C',
        })
    public CAB_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'CAB_SHORTDESCRIP_N_C',
        })
    public CAB_SHORTDESCRIP_N_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'CAB_SHORTDESCRIP_F_C',
        })
    public CAB_SHORTDESCRIP_F_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'CAB_SHORTDESCRIP_B_C',
        })
    public CAB_SHORTDESCRIP_B_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'CAB_SHORTDESCRIP_T_C',
        })
    public CAB_SHORTDESCRIP_T_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'cab_flagdelete_C',
        })
    public cab_flagdelete_C: string | null;

}
